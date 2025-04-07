// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import starlightImageZoom from "starlight-image-zoom";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Sonora Docs",
      favicon: "./favicon.png",
      logo: {
        src: "./src/assets/sonora.png",
      },
      customCss: ["./src/styles/props.css"],
      social: {
        github: "https://github.com/ImAxel0/Aura",
      },
      plugins: [starlightImageZoom()],
      sidebar: [
        {
          label: "Getting Started",
          items: [
            {
              label: "Installation",
              link: "./getting-started/installation",
            },
            {
              label: "Introduction",
              link: "./getting-started/introduction",
            },
            {
              label: "Usage example",
              link: "./getting-started/usage-example",
            },
          ],
        },
        {
          label: "Main Concepts",
          items: [
            { label: "Overview", link: "./main-concepts/core-features" },
            {
              label: "Devices",
              collapsed: true,
              items: [
                {
                  label: "Audio devices",
                  link: "./main-concepts/devices/audio-devices",
                },
                {
                  label: "Midi devices",
                  link: "./main-concepts/devices/midi-devices",
                },
              ],
            },
            {
              label: "Clips",
              collapsed: true,
              items: [
                {
                  label: "Audio clips",
                  link: "./main-concepts/clips/audio-clips",
                },
                {
                  label: "Midi clips",
                  link: "./main-concepts/clips/midi-clips",
                },
              ],
            },
            {
              label: "Tracks",
              collapsed: true,
              items: [
                {
                  label: "Audio tracks",
                  link: "./main-concepts/tracks/audio-tracks",
                },
                {
                  label: "Midi tracks",
                  link: "./main-concepts/tracks/midi-tracks",
                },
                {
                  label: "Group tracks",
                  link: "./main-concepts/tracks/group-tracks",
                },
              ],
            },
            {
              label: "Master",
              collapsed: true,
              items: [
                {
                  label: "Master mixer",
                  link: "./main-concepts/master/master",
                },
              ],
            },
            {
              label: "Plugins",
              collapsed: true,
              items: [
                {
                  label: "The plugins interface",
                  link: "./main-concepts/plugins/plugins-interface",
                },
                {
                  label: "VST plugins",
                  link: "./main-concepts/plugins/vst-plugins",
                },
                {
                  label: "Built in plugins",
                  link: "./main-concepts/plugins/builtin-plugins",
                },
              ],
            },
            {
              label: "Automations",
              collapsed: true,
              items: [
                {
                  label: "Clips automations",
                  link: "./main-concepts/automations/clips-automations",
                },
              ],
            },
          ],
        },
        {
          label: "Examples",
          items: [
            {
              label: "Basic playback",
              link: "./examples/basic-playback",
            },
            {
              label: "Playback with controls",
              link: "./examples/playback-controls",
            },
            {
              label: "Audio clip automations",
              link: "./examples/automations",
            },
            {
              label: "Digital Audio Workstation (WIP)",
              link: "./examples/lumix",
            },
          ],
        },
      ],
    }),
  ],
});
