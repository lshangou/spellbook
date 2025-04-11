export default function resolver(componentName: string) {
  if (componentName.startsWith('Sb')) {
    return { name: componentName, from: '@shangou/spellbook' }
  }
}
