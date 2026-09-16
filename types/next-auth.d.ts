import type { DefaultSession, DefaultUser } from "next-auth";
import type { DefaultJWT } from "next-auth/jwt";
import type { PortalRole } from "@/lib/store";

declare module "next-auth" {
  interface Session {
    user: {
      role: PortalRole;
      clientId: string | null;
    } & DefaultSession["user"];
  }

  interface User extends DefaultUser {
    role: PortalRole;
    clientId: string | null;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {
    role: PortalRole;
    clientId: string | null;
  }
}
