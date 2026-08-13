import { describe, it, expect } from "vitest";
import { projects, PROJECT_STATUS, getProjectBySlug } from "@/data/projects";
import { capabilities } from "@/data/capabilities";
import { timeline } from "@/data/timeline";
import { techStackGroups } from "@/data/techStack";

const REQUIRED_PROJECT_FIELDS = [
  "slug",
  "title",
  "status",
  "summary",
  "problem",
  "context",
  "objectives",
  "myRole",
  "stakeholders",
  "architecture",
  "milestones",
  "dependencies",
  "risks",
  "technicalDecisions",
  "deliveryStrategy",
];

describe("projects data model", () => {
  it("has exactly the three required case studies", () => {
    expect(projects).toHaveLength(3);
  });

  it("has a unique slug per project", () => {
    const slugs = projects.map((project) => project.slug);
    expect(new Set(slugs).size).toBe(slugs.length);
  });

  it("only uses valid status values", () => {
    const validStatuses = Object.values(PROJECT_STATUS);
    projects.forEach((project) => {
      expect(validStatuses).toContain(project.status);
    });
  });

  it("provides every required case-study field for each project", () => {
    projects.forEach((project) => {
      REQUIRED_PROJECT_FIELDS.forEach((field) => {
        expect(
          project[field],
          `${project.slug} is missing "${field}"`,
        ).toBeDefined();
      });
    });
  });

  it("provides both en and es content for bilingual fields", () => {
    projects.forEach((project) => {
      expect(project.title.en).toBeTruthy();
      expect(project.title.es).toBeTruthy();
      expect(project.summary.en).toBeTruthy();
      expect(project.summary.es).toBeTruthy();
    });
  });

  it("does not fabricate repository or demo links", () => {
    projects.forEach((project) => {
      expect(
        [null, undefined].includes(project.repositoryUrl) ||
          typeof project.repositoryUrl === "string",
      ).toBe(true);
      expect(
        [null, undefined].includes(project.demoUrl) ||
          typeof project.demoUrl === "string",
      ).toBe(true);
    });
  });

  it("resolves a project by slug and returns null for unknown slugs", () => {
    expect(getProjectBySlug(projects[0].slug)?.slug).toBe(projects[0].slug);
    expect(getProjectBySlug("does-not-exist")).toBeNull();
  });
});

describe("capabilities data model", () => {
  it("has exactly the eight required core capabilities", () => {
    expect(capabilities).toHaveLength(8);
  });

  it("provides bilingual title and description for each capability", () => {
    capabilities.forEach((capability) => {
      expect(capability.title.en).toBeTruthy();
      expect(capability.title.es).toBeTruthy();
      expect(capability.description.en).toBeTruthy();
      expect(capability.description.es).toBeTruthy();
    });
  });
});

describe("timeline data model", () => {
  it("has exactly the six required career entries", () => {
    expect(timeline).toHaveLength(6);
  });

  it("distinguishes the official title from the positioning note for every entry", () => {
    timeline.forEach((entry) => {
      expect(entry.officialTitle.en).toBeTruthy();
      expect(entry.positioningNote.en).toBeTruthy();
      expect(entry.officialTitle.en).not.toBe(entry.positioningNote.en);
    });
  });
});

describe("tech stack data model", () => {
  it("groups every item under a titled group", () => {
    techStackGroups.forEach((group) => {
      expect(group.title.en).toBeTruthy();
      expect(Array.isArray(group.items)).toBe(true);
      expect(group.items.length).toBeGreaterThan(0);
    });
  });
});
