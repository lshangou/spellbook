import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Spellbook",
  description: "Documentation for Spellbook lib.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/sb-button' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' }
        ]
      },
      {
        text: 'Components',
        items: [
          { text: 'Button', link: '/sb-button' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/lshangou' }
    ]
  }
})
