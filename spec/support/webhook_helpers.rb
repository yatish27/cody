require "openssl"

module WebhookHelpers
  def generate_signature(secret: ENV["CODY_GITHUB_WEBHOOK_SECRET"], body:)
    "sha1=#{OpenSSL::HMAC.hexdigest(OpenSSL::Digest.new("sha1"), secret, body)}"
  end
end
