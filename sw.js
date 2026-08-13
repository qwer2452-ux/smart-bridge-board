// 최소 서비스워커 — 오프라인 캐싱은 하지 않고, 크롬 PWA "앱 설치" 조건 충족용
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {}); // fetch 핸들러 존재 자체가 설치 가능 조건
