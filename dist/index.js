import { Central } from '@lionrockjs/central';
Central.viewFiles.set('templates/home', {
    package: '@lionrockjs/view-admin',
    payload: await import('../views/templates/home.json', { with: { type: 'json' } })
});
