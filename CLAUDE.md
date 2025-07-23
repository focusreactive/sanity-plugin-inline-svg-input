# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Sanity Studio v3 plugin that allows users to upload and preview inline SVG files. The plugin provides a custom input field type `inlineSvg` with safe SVG sanitization using DOMPurify.

## Key Components Architecture

- **Plugin Entry Point**: `src/index.ts` - Defines the main plugin using Sanity's `definePlugin` and exports preview components
- **Schema Type**: `src/inlineSvgType.ts` - Defines the `inlineSvg` schema type as a string with custom input component
- **Main Input Component**: `src/InlineSvgInput.tsx` - The core file upload and preview interface with styled-components
- **Preview Components**: 
  - `InlineSvgPreviewComponent.tsx` - Basic SVG rendering component with DOMPurify sanitization
  - `InlineSvgPreviewItem.tsx` - Array preview component matching Sanity's default array preview style

## Development Commands

**Note**: This project uses `pnpm` as its package manager. All commands should be run with `pnpm` instead of `npm`.

- `pnpm run build` - Build the plugin for distribution (includes verification and type checking)
- `pnpm run watch` - Watch mode for development with strict type checking
- `pnpm run lint` - Run ESLint with Sanity configuration
- `pnpm run format` - Format code with Prettier
- `pnpm run clean` - Remove dist folder
- `pnpm run link-watch` - Create symlink to local Sanity project and watch for changes

## Configuration and Dependencies

- Uses `@sanity/plugin-kit` for build tooling and development workflow
- TypeScript configuration extends from `tsconfig.settings.json`
- ESLint uses Sanity's recommended configurations with Prettier integration
- Peer dependencies: React 18/19, Sanity v3/v4, styled-components 5/6, @sanity/ui v1/v2

## Testing and Development

The plugin uses `@sanity/plugin-kit`'s standard workflow. Use `pnpm run link-watch` to test the plugin in a local Sanity Studio project during development. The build process includes package verification before publishing.