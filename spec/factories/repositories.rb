FactoryBot.define do
  factory :repository do
    owner "baxterthehacker"
    sequence(:name) { |x| "public-repo#{x}" }
  end
end
