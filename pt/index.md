---

layout: default
title: Ezteven blog
description: Me gusta ver el mundo desde otras perspectivas.
image: /assets/icons/favicon-96x96.png
author: esteban_quezada
lang: pt

---

<h2>{{ site.data.i18n.publicaciones[page.lang] }} | <a href="/" class="grey--text es">es</a> · <a href="/pt/" class="black--text pt">pt</a></h2>
<hr>
<div>
  {% assign posts=site.posts | where:"lang", page.lang %}
  {% for post in posts %}
    <div class="post-row">
      <div class="post-col-left">
        <a href="{{ post.url }}">
        <div class="post-title">{{ post.title }}</div>
        <div class="post-date">{{ post.categories }} · 
          {% assign m = post.date | date: "%-m" | minus: 1 %}
          {{ post.date | date: "%-d" }} 
          de 
          {{ site.data.i18n.meses[page.lang][m] }}
        </div>
        <div class="post-description">{{ post.description | truncatewords: 15 }}</div>
        </a>
      </div>
      <div class="post-col-right">
        {% if post.image %}
          <div class="post-image" style="background: url({{ post.image }}) 50% 50% no-repeat;">
          </div>
        {% endif %}
      </div>
    </div>
    <hr>
  {% endfor %}
</div>
<div class="pagination">
    <span class="paginate-btn">{{ site.data.i18n.anterior[page.lang] }}</span>
    <span class="paginate-btn">{{ site.data.i18n.siguiente[page.lang] }}</span>
</div>
