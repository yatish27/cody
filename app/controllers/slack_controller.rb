# frozen_string_literal: true

class SlackController < ApplicationController
  protect_from_forgery with: :null_session

  include RequiresAuthentication

  before_action :require_authentication!, only: [:connect]

  def command
    unless SlackTeam.exists?(team_id: params[:team_id])
      message = {
        response_type: "ephemeral",
        text: "Sorry, it looks like Cody has not been installed in your workspace yet. Please install the app first and then try logging in again."
      }

      Faraday.post(
        params[:response_url],
        JSON.generate(message),
        content_type: "application/json"
      )
      return
    end

    argv = params[:text].split(" ")
    case argv[0]
    when "login"
      login
    else
      unrecognized
    end
  end

  def connect
    unless params[:uid].present? && params[:team_id].present?
      @message = "Sorry, something has gone wrong with this link."
      @sub_message = "Please try logging in through Slack again."
    end

    unless (team = SlackTeam.find_by(team_id: params[:team_id]))
      @message = "Cody is not installed in your workspace."
      @sub_message = "Please add Cody to your workspace before trying to login."
    end

    if current_user.slack_identity.present?
      @message = "You are already connected."
      @sub_message = "You can only login once."
    end

    identity = current_user.build_slack_identity(
      uid: params[:uid],
      slack_team: team
    )
    if identity.valid?
      identity.save
      @message = "You're all set!"
      @sub_message = "Your Slack identity has been connected to Cody."
    else
      @message = "Sorry, something has gone wrong with this link."
      @sub_message = "Please try logging in through Slack again."
    end
  end

  private

  def login
    button_url = Rails.application.routes.url_helpers.slack_connect_url(
      protocol: "https",
      host: ENV["CODY_HOST"],
      uid: params[:user_id],
      team_id: params[:team_id]
    )
    message = {
      reponse_type: "ephemeral",
      text: "Hi! Please click the button below to connect your Slack identity with Cody.",
      attachments: [
        {
          fallback: "Please login to Cody: #{button_url}",
          actions: [
            {
              type: "button",
              text: "Connect",
              url: button_url
            }
          ]
        }
      ]
    }

    Faraday.post(
      params[:response_url],
      JSON.generate(message),
      content_type: "application/json"
    )
  end

  def unrecognized
    message = {
      reponse_type: "ephemeral",
      text: "Sorry, I don't understand that command."
    }

    Faraday.post(
      params[:response_url],
      JSON.generate(message),
      content_type: "application/json"
    )
  end
end
