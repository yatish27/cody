class ReviewRuleAuthor < ReviewRule
  def matches?(pull_request_hash)
    author = pull_request_hash["user"]["login"]
    if self.selector.match?(/^\d+$/)
      github_client.team_member?(self.selector, author)
    else
      author == self.selector
    end
  end
end
