---

title: Inicio
image: /assets/icons/favicon-96x96.png
lang: es

---

{% include index_header.html %}
<div>
  {% assign posts=site.posts | where:"lang", page.lang %}
  {% for post in posts limit:4 %}
  {% include posts_list.md %}
  {% endfor %}
  {% include in-feed-ad.html %}
  {% for post in posts limit:5 offset:4 %}
  {% include posts_list.md %}
  {% endfor %}
  {% include in-feed-ad.html %}
  {% for post in posts limit:1 offset:9 %}
  {% include posts_list.md %}
  {% endfor %}
</div>
<div class="pagination">
    <span class="paginate-btn">{{ site.data.i18n.anterior[page.lang] }}</span>
    <span class="paginate-btn"><a href="/page/2/">{{ site.data.i18n.siguiente[page.lang] }}</a></span>
</div>
