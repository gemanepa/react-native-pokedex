var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { cleanup, init } from 'detox';
import * as adapter from 'detox/runners/jest/adapter';
const config = require('../package.json').detox;
jest.setTimeout(120000);
jasmine.getEnv().addReporter(adapter);
beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
    // Don't reinstall the app each time
    yield init(config, { reuse: true });
}));
beforeEach(() => __awaiter(void 0, void 0, void 0, function* () {
    yield adapter.beforeEach();
}));
afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
    yield adapter.afterAll();
    yield cleanup();
}));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL3NhbXVlbGJhcmtlci9jb2RlL3BlcnNvbmFsL3JlYWN0LW5hdGl2ZS1wbGF5Z3JvdW5kL3BsYXlncm91bmQvZTJlL2luaXQudHMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW11ZWxiYXJrZXIvY29kZS9wZXJzb25hbC9yZWFjdC1uYXRpdmUtcGxheWdyb3VuZC9wbGF5Z3JvdW5kL2UyZS9pbml0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sT0FBTyxDQUFDO0FBQ3RDLE9BQU8sS0FBSyxPQUFPLE1BQU0sNEJBQTRCLENBQUM7QUFFdEQsTUFBTSxNQUFNLEdBQUcsT0FBTyxDQUFDLGlCQUFpQixDQUFDLENBQUMsS0FBSyxDQUFDO0FBRWhELElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDeEIsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUV0QyxTQUFTLENBQUMsR0FBUyxFQUFFO0lBQ25CLG9DQUFvQztJQUNwQyxNQUFNLElBQUksQ0FBQyxNQUFNLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztBQUN0QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsVUFBVSxDQUFDLEdBQVMsRUFBRTtJQUNwQixNQUFNLE9BQU8sQ0FBQyxVQUFVLEVBQUUsQ0FBQztBQUM3QixDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsUUFBUSxDQUFDLEdBQVMsRUFBRTtJQUNsQixNQUFNLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUN6QixNQUFNLE9BQU8sRUFBRSxDQUFDO0FBQ2xCLENBQUMsQ0FBQSxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjbGVhbnVwLCBpbml0IH0gZnJvbSAnZGV0b3gnO1xuaW1wb3J0ICogYXMgYWRhcHRlciBmcm9tICdkZXRveC9ydW5uZXJzL2plc3QvYWRhcHRlcic7XG5cbmNvbnN0IGNvbmZpZyA9IHJlcXVpcmUoJy4uL3BhY2thZ2UuanNvbicpLmRldG94O1xuXG5qZXN0LnNldFRpbWVvdXQoMTIwMDAwKTtcbmphc21pbmUuZ2V0RW52KCkuYWRkUmVwb3J0ZXIoYWRhcHRlcik7XG5cbmJlZm9yZUFsbChhc3luYyAoKSA9PiB7XG4gIC8vIERvbid0IHJlaW5zdGFsbCB0aGUgYXBwIGVhY2ggdGltZVxuICBhd2FpdCBpbml0KGNvbmZpZywgeyByZXVzZTogdHJ1ZSB9KTtcbn0pO1xuXG5iZWZvcmVFYWNoKGFzeW5jICgpID0+IHtcbiAgYXdhaXQgYWRhcHRlci5iZWZvcmVFYWNoKCk7XG59KTtcblxuYWZ0ZXJBbGwoYXN5bmMgKCkgPT4ge1xuICBhd2FpdCBhZGFwdGVyLmFmdGVyQWxsKCk7XG4gIGF3YWl0IGNsZWFudXAoKTtcbn0pOyJdfQ==