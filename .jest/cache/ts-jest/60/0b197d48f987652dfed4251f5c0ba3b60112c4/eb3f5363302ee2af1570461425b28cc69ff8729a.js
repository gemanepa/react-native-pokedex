"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const detox_1 = require("detox");
const adapter = require("detox/runners/jest/adapter");
const config = require('../package.json').detox;
jest.setTimeout(120000);
jasmine.getEnv().addReporter(adapter);
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    // Don't reinstall the app each time
    yield detox_1.init(config, { reuse: true });
}));
beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
    yield adapter.beforeEach();
}));
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield adapter.afterAll();
    yield detox_1.cleanup();
}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL3NhbXVlbGJhcmtlci9jb2RlL3BlcnNvbmFsL3JlYWN0LW5hdGl2ZS1wbGF5Z3JvdW5kL3BsYXlncm91bmQvZTJlL2luaXQudHMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW11ZWxiYXJrZXIvY29kZS9wZXJzb25hbC9yZWFjdC1uYXRpdmUtcGxheWdyb3VuZC9wbGF5Z3JvdW5kL2UyZS9pbml0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsaUNBQXNDO0FBQ3RDLHNEQUFzRDtBQUV0RCxNQUFNLE1BQU0sR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxLQUFLLENBQUM7QUFFaEQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztBQUN4QixPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBRXRDLFNBQVMsQ0FBQyxHQUFTLEVBQUU7SUFDbkIsb0NBQW9DO0lBQ3BDLE1BQU0sWUFBSSxDQUFDLE1BQU0sRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3RDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxVQUFVLENBQUMsR0FBUyxFQUFFO0lBQ3BCLE1BQU0sT0FBTyxDQUFDLFVBQVUsRUFBRSxDQUFDO0FBQzdCLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxRQUFRLENBQUMsR0FBUyxFQUFFO0lBQ2xCLE1BQU0sT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3pCLE1BQU0sZUFBTyxFQUFFLENBQUM7QUFDbEIsQ0FBQyxDQUFBLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNsZWFudXAsIGluaXQgfSBmcm9tICdkZXRveCc7XG5pbXBvcnQgKiBhcyBhZGFwdGVyIGZyb20gJ2RldG94L3J1bm5lcnMvamVzdC9hZGFwdGVyJztcblxuY29uc3QgY29uZmlnID0gcmVxdWlyZSgnLi4vcGFja2FnZS5qc29uJykuZGV0b3g7XG5cbmplc3Quc2V0VGltZW91dCgxMjAwMDApO1xuamFzbWluZS5nZXRFbnYoKS5hZGRSZXBvcnRlcihhZGFwdGVyKTtcblxuYmVmb3JlQWxsKGFzeW5jICgpID0+IHtcbiAgLy8gRG9uJ3QgcmVpbnN0YWxsIHRoZSBhcHAgZWFjaCB0aW1lXG4gIGF3YWl0IGluaXQoY29uZmlnLCB7IHJldXNlOiB0cnVlIH0pO1xufSk7XG5cbmJlZm9yZUVhY2goYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBhZGFwdGVyLmJlZm9yZUVhY2goKTtcbn0pO1xuXG5hZnRlckFsbChhc3luYyAoKSA9PiB7XG4gIGF3YWl0IGFkYXB0ZXIuYWZ0ZXJBbGwoKTtcbiAgYXdhaXQgY2xlYW51cCgpO1xufSk7Il19