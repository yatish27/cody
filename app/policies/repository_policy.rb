class RepositoryPolicy < ApplicationPolicy
  class Scope < Scope
    def resolve
      Repository.all
    end
  end
end
