class ApplicationMailer < ActionMailer::Base
  default from: Setting.lookup("default_from_address") || "from@example.com"
  layout "mailer"
  helper :application
end
