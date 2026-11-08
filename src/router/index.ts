import { readonly, ref } from 'vue'

export type Page = 'home' | 'projects'

const baseUrl = new URL(import.meta.env.BASE_URL, window.location.href)
const legacyProjectsPath = `${baseUrl.pathname.replace(/\/$/, '')}/projects`
if (
  window.location.pathname.replace(/\/$/, '').toLowerCase() === legacyProjectsPath.toLowerCase()
) {
  baseUrl.search = window.location.search
  baseUrl.hash = window.location.hash.startsWith('#/')
    ? window.location.hash
    : `#/projects${window.location.hash}`
  window.history.replaceState(window.history.state, '', baseUrl)
}

function currentPage(): Page | null {
  const path = window.location.hash.slice(1).split(/[?#]/, 1)[0]?.toLowerCase()

  if (!path || path === '/') return 'home'
  if (path === '/projects' || path === '/projects/') return 'projects'
  return null
}

const page = ref(currentPage())
let pendingNavigation: string | null = null

window.addEventListener('hashchange', () => {
  page.value = currentPage()
  if (pendingNavigation === window.location.hash) {
    window.scrollTo({ left: 0, top: 0 })
  }
  pendingNavigation = null
})

export function prepareNavigation(event: MouseEvent) {
  if (
    event.defaultPrevented ||
    event.button !== 0 ||
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  )
    return

  const link = event.currentTarget
  if (link instanceof HTMLAnchorElement && link.hash !== window.location.hash) {
    pendingNavigation = link.hash
  }
}

export function usePage() {
  return readonly(page)
}
