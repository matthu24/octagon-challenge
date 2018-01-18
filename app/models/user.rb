class User < ApplicationRecord
  validates :first_name, :last_name, :email, :zip, :state, presence: true;
  validate :first_name_re, :last_name_re, :email_re, :zip_re
#
# private
# def discount_cannot_be_greater_than_total_value
#   if discount > total_value
#     errors[:discount] << 'can\'t be greater than total value'
#   end
# end


  def first_name_re
    # Use 'str[/[a-zA-Z]*/] == str' to let all_letters
    # yield true for the empty string

    if first_name[/[a-zA-Z]+/]  != first_name
      errors[:first_name] << 'requires letters only'
    end
  end
#
  def last_name_re
    # Use 'str[/[a-zA-Z]*/] == str' to let all_letters
    # yield true for the empty string
    if last_name[/[a-zA-Z'-]+/]  != last_name
      errors[:last_name] << 'requires letters, apostrophes, and hyphens only'
    end
  end
#
def email_re
re = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
    if !email.match(re)
      errors[:email] << 'requires valid email'
    end

end
#
def zip_re
  re=/^\d{5}(-\d{4})?$/
  if !zip.match(re)
    errors[:zip] << "requires a five digit code"
  end
end

end
