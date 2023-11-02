import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { MatLibServiceBase } from "./base/matLib.service.base";

@Injectable()
export class MatLibService extends MatLibServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
