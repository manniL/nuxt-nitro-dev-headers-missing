# nitro-header-dev-bug

## Problem

The whole req object is not available when using Nitro in dev mode.

Reproduction:

1. Install deps (yarn)
2. Start dev server (yarn dev)
3. Go to localhost:3000

Expected behavior: Seeing all header values
Actual: See "undefined! (from plugins/headers.js)"