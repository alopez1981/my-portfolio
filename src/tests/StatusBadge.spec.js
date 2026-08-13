import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import StatusBadge from "@/components/ui/StatusBadge.vue";
import { createTestI18n } from "./testUtils";

function mountBadge(status) {
  return mount(StatusBadge, {
    props: { status },
    global: { plugins: [createTestI18n()] },
  });
}

describe("StatusBadge", () => {
  it.each([
    ["planned", "Planned"],
    ["in_progress", "In progress"],
    ["available", "Available"],
  ])("renders the %s label as %s", (status, label) => {
    const wrapper = mountBadge(status);
    expect(wrapper.text()).toContain(label);
  });
});
