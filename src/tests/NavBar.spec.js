import { describe, it, expect, beforeEach } from "vitest";
import { mount } from "@vue/test-utils";
import { createRouter, createMemoryHistory } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import routerConfig from "@/router";
import { createTestI18n } from "./testUtils";

describe("NavBar", () => {
  let testRouter;

  beforeEach(async () => {
    testRouter = createRouter({
      history: createMemoryHistory(),
      routes: routerConfig.options.routes,
    });
    await testRouter.push("/");
  });

  async function mountNavBar() {
    const wrapper = mount(NavBar, {
      global: { plugins: [createTestI18n(), testRouter] },
    });
    await testRouter.isReady();
    return wrapper;
  }

  it("renders all seven top-level nav links", async () => {
    const wrapper = await mountNavBar();
    [
      "Home",
      "About",
      "Capabilities",
      "Case Studies",
      "Journey",
      "Tech Stack",
      "Contact",
    ].forEach((label) => {
      expect(wrapper.text()).toContain(label);
    });
  });

  it("starts with the mobile menu closed and opens it on toggle", async () => {
    const wrapper = await mountNavBar();
    const toggle = wrapper.get('button[aria-controls="mobile-menu"]');
    expect(toggle.attributes("aria-expanded")).toBe("false");

    await toggle.trigger("click");

    expect(toggle.attributes("aria-expanded")).toBe("true");
  });
});
