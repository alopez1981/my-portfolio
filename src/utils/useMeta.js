import { watchEffect } from "vue";

function upsertMetaTag(nameOrProperty, content) {
  const isOg = nameOrProperty.startsWith("og:");
  const selector = isOg
    ? `meta[property="${nameOrProperty}"]`
    : `meta[name="${nameOrProperty}"]`;

  let tag = document.head.querySelector(selector);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(isOg ? "property" : "name", nameOrProperty);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function upsertCanonical(url) {
  let link = document.head.querySelector('link[rel="canonical"]');
  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", "canonical");
    document.head.appendChild(link);
  }
  link.setAttribute("href", url);
}

export function useMeta(getMeta) {
  watchEffect(() => {
    const { title, description } = getMeta();

    document.title = title;
    upsertMetaTag("description", description);
    upsertMetaTag("og:title", title);
    upsertMetaTag("og:description", description);
    upsertMetaTag("og:type", "website");
    upsertMetaTag("og:url", window.location.href);
    upsertCanonical(window.location.href);
  });
}
