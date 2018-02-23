module ApplicationHelper
  def pull_request_url(pull_request)
    "https://github.com/#{pull_request.repository}/pull/#{pull_request.number}"
  end
end
