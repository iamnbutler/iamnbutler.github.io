import { mount, unmount } from 'svelte';

export default async function loadThemeEditor() {
  const { default: ThemeEditor } = await import('./ThemeEditor.svelte');

  const container = document.createElement('div');
  container.id = 'theme-editor-root';
  document.body.appendChild(container);

  let instance: any;

  instance = mount(ThemeEditor, {
    target: container,
    props: {
      onclose: () => {
        unmount(instance);
        container.remove();
        // Remove ?edit from URL without reload
        const url = new URL(window.location.href);
        url.searchParams.delete('edit');
        history.replaceState({}, '', url.toString());
      },
    },
  });
}
