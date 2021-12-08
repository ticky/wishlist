---
layout: default
---
# Jessica’s meta-wishlist
A list of things Jessica would like (for Christmas, birthdays, etc.), made because I keep having trouble coming up with an answer to the question of what I’d like!

## Elsewhere
Other places on the internet where I have wishlists.

<ul>
{% for wishlist in site.data.wishlist.wishlists %}
  <li>
    {% if wishlist.link %}
    <a href="{{ wishlist.link }}">
    {% endif %}
      {{ wishlist.name }}
    {% if wishlist.link %}
    </a>
    {% endif %}
  </li>
{% endfor %}
</ul>

## Things
Anything which doesn’t go on a list elsewhere can live here.

<ul>
{% for thing in site.data.wishlist.things %}
  {% capture title %}<strong>{{ thing.name }}</strong>{% endcapture %}
  <li>
  {% if thing.link.first %}
    {{ title }} ({% for link in thing.link %}<a href="{{ link }}">{{ link | absolute_url | split: '//' | last | split: '/' | first | remove: 'www.' }}</a>{% unless forloop.last %}, {% endunless %}{% endfor %})
  {% elsif thing.link %}
    <a href="{{ thing.link }}">{{ title }}</a>
  {% else %}
    {{ title }}
  {% endif %}
  {% if thing.notes %}
    <p style="margin: 0">{{ thing.notes }}</p>
  {% endif %}
  </li>
{% endfor %}
</ul>
