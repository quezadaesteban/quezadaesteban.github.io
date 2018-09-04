---

layout: default
title: Inicio
image: /assets/icons/favicon-96x96.png
author: esteban_quezada
lang: es

---

{% include index_header.html %}
<div>
  {% assign posts=site.posts | where:"lang", page.lang %}
  {% for post in posts limit:10 offset:10 %}
  {% include posts_list.md %}
  {% endfor %}
</div>
<div class="pagination">
    <span class="paginate-btn"><a href="/">{{ site.data.i18n.anterior[page.lang] }}</a></span>
    <span class="paginate-btn">{{ site.data.i18n.siguiente[page.lang] }}</span>
</div>
