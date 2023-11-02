import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { MatLibService } from "./matLib.service";
import { MatLibControllerBase } from "./base/matLib.controller.base";

@swagger.ApiTags("matLibs")
@common.Controller("matLibs")
export class MatLibController extends MatLibControllerBase {
  constructor(
    protected readonly service: MatLibService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
