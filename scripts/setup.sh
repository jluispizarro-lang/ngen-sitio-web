#!/usr/bin/env bash
#
# setup.sh — Bootstrap del proyecto Ngen Sitio Web.
#
# Qué hace:
#   1. Verifica que Node.js (>=18.18) y npm estén instalados.
#   2. Instala las dependencias del proyecto.
#   3. Ejecuta una verificación de tipos (typecheck) para confirmar
#      que el proyecto quedó en un estado compilable.
#
# Uso:
#   cd "10. Sitio_Web"
#   bash scripts/setup.sh
#
set -euo pipefail

REQUIRED_NODE_MAJOR=18
REQUIRED_NODE_MINOR=18

info() { printf '\033[1;34m[setup]\033[0m %s\n' "$1"; }
error() { printf '\033[1;31m[setup:error]\033[0m %s\n' "$1" >&2; }

if ! command -v node >/dev/null 2>&1; then
  error "Node.js no está instalado. Instala Node.js 18.18 o superior desde https://nodejs.org/ e intenta de nuevo."
  exit 1
fi

if ! command -v npm >/dev/null 2>&1; then
  error "npm no está disponible. Reinstala Node.js (npm viene incluido) e intenta de nuevo."
  exit 1
fi

NODE_VERSION="$(node -v | sed 's/^v//')"
NODE_MAJOR="$(echo "$NODE_VERSION" | cut -d. -f1)"
NODE_MINOR="$(echo "$NODE_VERSION" | cut -d. -f2)"

if [ "$NODE_MAJOR" -lt "$REQUIRED_NODE_MAJOR" ] || { [ "$NODE_MAJOR" -eq "$REQUIRED_NODE_MAJOR" ] && [ "$NODE_MINOR" -lt "$REQUIRED_NODE_MINOR" ]; }; then
  error "Se requiere Node.js >= ${REQUIRED_NODE_MAJOR}.${REQUIRED_NODE_MINOR}. Versión detectada: ${NODE_VERSION}."
  exit 1
fi

info "Node.js ${NODE_VERSION} detectado. OK."

info "Instalando dependencias (npm install)..."
npm install

info "Verificando tipos de TypeScript (npm run typecheck)..."
npm run typecheck

info "Listo. Para iniciar el servidor de desarrollo ejecuta:"
info "  npm run dev"
info "El sitio quedará disponible en http://localhost:3000"
