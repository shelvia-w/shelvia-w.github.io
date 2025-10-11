---
layout: page
title: Others
permalink: /others/
description: A collection of my personal projects or interests.
nav: true
nav_order: 4
---

<style>
.projects-list {
  max-width: 1000px;
  margin: 0 auto;
}

.project-row {
  display: flex;
  align-items: center;
  gap: 3rem;
  padding: 2.5rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-row:hover {
  transform: translateX(8px);
}

.project-row:last-child {
  border-bottom: none;
}

.project-image {
  flex: 0 0 320px;
  height: 240px;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease, transform 0.3s ease;
}

.project-row:hover .project-image {
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.15);
  transform: scale(1.02);
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.project-content {
  flex: 1;
}

.project-title {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.project-description {
  font-size: 1.05rem;
  line-height: 1.6;
  color: #666;
  margin: 0;
}

.project-date {
  font-size: 0.9rem;
  color: #999;
  margin-top: 0.5rem;
  font-style: italic;
}

@media (max-width: 768px) {
  .project-row {
    flex-direction: column;
    gap: 1.5rem;
    padding: 2rem;
  }
  
  .project-image {
    flex: 0 0 auto;
    width: 100%;
    height: 200px;
  }
  
  .project-row:hover {
    transform: none;
  }
}
</style>

<!-- pages/projects.md -->
<div class="projects">
{%- if site.enable_project_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {%- for category in page.display_categories %}
  <h2 class="category">{{ category }}</h2>
  {%- assign categorized_projects = site.projects | where: "category", category -%}
  {%- assign sorted_projects = categorized_projects | sort: "importance" %}
  
  <div class="projects-list">
    {%- for project in sorted_projects -%}
    <div class="project-row">
      <div class="project-image">
        {%- if project.img %}
        {%- if project.redirect %}
        <a href="{{ project.redirect }}" target="_blank" rel="noopener noreferrer">
          <img src="{{ project.img | relative_url }}" alt="{{ project.title }}">
        </a>
        {%- else %}
        <a href="{{ project.url | relative_url }}">
          <img src="{{ project.img | relative_url }}" alt="{{ project.title }}">
        </a>
        {%- endif %}
        {%- else %}
        <img src="https://via.placeholder.com/320x240?text={{ project.title | url_encode }}" alt="{{ project.title }}">
        {%- endif %}
      </div>
      <div class="project-content">
        <h3 class="project-title">
          {%- if project.icon %}{{ project.icon }}{%- endif %}
          {%- if project.redirect %}
          <a href="{{ project.redirect }}" target="_blank" rel="noopener noreferrer">{{ project.title }}</a>
          {%- else %}
          <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
          {%- endif %}
        </h3>
        <p class="project-description">{{ project.description }}</p>
      </div>
    </div>
    {%- endfor %}
  </div>
  {% endfor %}

{%- else -%}
<!-- Display projects without categories -->
  {%- assign sorted_projects = site.projects | sort: "importance" -%}
  
  <div class="projects-list">
    {%- for project in sorted_projects -%}
    <div class="project-row">
      <div class="project-image">
        {%- if project.img %}
        {%- if project.redirect %}
        <a href="{{ project.redirect }}" target="_blank" rel="noopener noreferrer">
          <img src="{{ project.img | relative_url }}" alt="{{ project.title }}">
        </a>
        {%- else %}
        <a href="{{ project.url | relative_url }}">
          <img src="{{ project.img | relative_url }}" alt="{{ project.title }}">
        </a>
        {%- endif %}
        {%- else %}
        <img src="https://via.placeholder.com/320x240?text={{ project.title | url_encode }}" alt="{{ project.title }}">
        {%- endif %}
      </div>
      <div class="project-content">
        <h3 class="project-title">
          {%- if project.icon %}{{ project.icon }}{%- endif %}
          {%- if project.redirect %}
          <a href="{{ project.redirect }}" target="_blank" rel="noopener noreferrer">{{ project.title }}</a>
          {%- else %}
          <a href="{{ project.url | relative_url }}">{{ project.title }}</a>
          {%- endif %}
        </h3>
        <p class="project-description">{{ project.description }}</p>
      </div>
    </div>
    {%- endfor %}
  </div>
{%- endif -%}
</div>