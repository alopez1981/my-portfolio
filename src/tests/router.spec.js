import { describe, it, expect, beforeEach } from "vitest";
import { createRouter, createMemoryHistory } from "vue-router";
import router from "@/router";

describe("router", () => {
  let testRouter;

  beforeEach(() => {
    testRouter = createRouter({
      history: createMemoryHistory(),
      routes: router.options.routes,
    });
  });

  const paths = [
    "/",
    "/about",
    "/capabilities",
    "/case-studies",
    "/case-studies/saas-platform-delivery-lab",
    "/journey",
    "/stack",
    "/contact",
  ];

  it.each(paths)("resolves %s to a matched route", async (path) => {
    await testRouter.push(path);
    expect(testRouter.currentRoute.value.matched.length).toBeGreaterThan(0);
  });

  it("has no unnamed duplicate paths", () => {
    const paths = router.options.routes.map((route) => route.path);
    expect(new Set(paths).size).toBe(paths.length);
  });
});
