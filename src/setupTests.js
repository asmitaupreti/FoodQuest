import '@testing-library/jest-dom'

import { beforeAll, afterEach, afterAll } from 'vitest'
import { server } from './__tests__/mocks/server'

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }))
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

server.events.on('request:start', ({ request }) => {
  console.log('MSW intercepted:', request.method, request.url)
})
