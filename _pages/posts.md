---
layout: page
permalink: /posts/
---
<div>
  {% for post in site.posts %}
    <a href="{% if post.external_link %}{{ post.external_link }}{% else %}{{ post.url }}{% endif %}" class="home-blog--item horizontal" data-aos="fade-up" data-aos-ratio=".25" data-aos-delay="{{ forloop.index | minus: 1 |  times:200 }}">
      <div class="home-blog--item--image">
        {% include cloudinary.html img=post.image.file width="500" height="500" %}
      </div>
      <div class="home-blog--item--text">
        <h3 class="home-blog--item--title">{{ post.title }}</h3>
        <!-- <p class="home-blog--item--excerpt">{{ post.excerpt | strip_html | strip_newlines | truncate: 80 }}</p> -->
        <div class="home-blog--item--date">{{ post.date | date: site.data.config.date_format }}</div>
      </div>
      <span class="home-blog--item--read-more">Read more</span>
    </a>
  {% endfor %}
</div>
