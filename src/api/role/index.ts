import http from "@/http";
import { RoleListParm, SysRole } from "./RoleModel";

// 新增
export const addApi = (parm: SysRole) => {
  return http.post("/api/role", parm);
};

// 角色列表
export const getListApi = (parm: RoleListParm) => {
  return http.post("/api/role/getList", parm);
};