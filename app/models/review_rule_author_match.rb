class ReviewRuleAuthorMatch < ReviewRule
  def matches?(pull_request_hash)
    author = pull_request_hash[:user][:login]
    self.match_context =
      if self.author_matches?(author)
        self.generate_match_context
      else
        false
      end
  end

  def author_matches?(author)
    if self.team_match?
      github_client.team_member?(self.file_match, author)
    else
      self.file_match == author
    end
  end

  def team_match?
    self.file_match.matches?(/^\d+$/)
  end

  def user_match?
    !self.team_match?
  end

  def generate_match_context
    if self.team_match?
      "  - This rule triggered by the PR author's team membership"
    else
      "  - This rule triggered by the PR author's identity"
    end
  end
end
