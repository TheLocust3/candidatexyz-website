class EmailValidator < ActiveModel::EachValidator
    def validate_each(record, attribute, value)
        if value.nil?
            return
        end

        unless value =~ /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\z/i
            record.errors[attribute] << (options[:message] || 'is not an email')
        end
    end
end