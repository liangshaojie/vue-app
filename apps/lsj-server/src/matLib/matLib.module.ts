import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { MatLibModuleBase } from "./base/matLib.module.base";
import { MatLibService } from "./matLib.service";
import { MatLibController } from "./matLib.controller";
import { MatLibResolver } from "./matLib.resolver";

@Module({
  imports: [MatLibModuleBase, forwardRef(() => AuthModule)],
  controllers: [MatLibController],
  providers: [MatLibService, MatLibResolver],
  exports: [MatLibService],
})
export class MatLibModule {}
