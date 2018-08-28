<div class="post-row">
  <div class="post-col-left">
    <a href="{{ post.url }}">
    <div class="post-title">{{ post.title }}
    {% if post.new_tag == true %}
    <span class="new_tag">{{ site.data.i18n.new[page.lang] }}</span>
    {% endif %}
    </div>
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
    {% if post.thumbnail %}
      <div class="post-image" style="background: url({{ post.thumbnail }}) 50% 50% no-repeat;">
      </div>
    {% endif %}
  </div>
</div>
<hr>