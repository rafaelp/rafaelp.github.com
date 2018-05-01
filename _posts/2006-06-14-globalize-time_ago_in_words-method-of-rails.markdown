---
title: Globalize time_ago_in_words method of Rails
date: 2006-06-14 20:02:27 -03:00
categories:
- Posts
tags:
- rails
- ruby
- snippet
- code
- globalize
- i18n
layout: post
status: publish
author: Rafael Lima
author_login: admin
author_email: contato@rafael.adm.br
author_url: http://rafael.lima.myopenid.com/
wordpress_id: 52
wordpress_url: http://rafael.adm.br/p/globalize-time_ago_in_words-methos-of-rails/
---

To localize the <strong>distance_of_time_in_words</strong> and <strong>time_ago_in_words</strong> methods of Ruby on Rails with <a href="http://globalize-rails.org">Globalize Plugin</a>, put these lines on your <strong>app/helpers/application_helper.rb</strong>

[ruby]
def distance_of_time_in_words(from_time, to_time = 0, include_seconds = false)
    from_time = from_time.to_time if from_time.respond_to?(:to_time)
    to_time = to_time.to_time if to_time.respond_to?(:to_time)
    distance_in_minutes = (((to_time - from_time).abs)/60).round
    distance_in_seconds = ((to_time - from_time).abs).round

    case distance_in_minutes
        when 0..1
            return (distance_in_minutes==0) ? 'less than a minute' : '1 minute' unless include_seconds

            case distance_in_seconds
                when 0..5   then "less than %d seconds".t / 5
                when 6..10  then "less than %d seconds".t / 10
                when 11..20 then "less than %d seconds".t / 20
                when 21..40 then "half a minute".t
                when 41..59 then "less than a minute".t
                else             "1 minute".t
            end

        when 2..45      then "%d minutes".t / distance_in_minutes
        when 46..90     then "about 1 hour".t
        when 90..1440   then "about %d hours".t  / (distance_in_minutes.to_f / 60.0).round
        when 1441..2880 then "1 day".t
        else                 "%d days".t / (distance_in_minutes / 1440).round
    end
end[/ruby]
