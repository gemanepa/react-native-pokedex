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
const detox_expo_helpers_1 = require("detox-expo-helpers");
describe('Viewing Pokemon', () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield detox_expo_helpers_1.reloadApp();
    }));
    it('should display the home screen on start', () => __awaiter(void 0, void 0, void 0, function* () {
        yield detox_1.expect(detox_1.element(detox_1.by.id('home'))).toBeVisible();
    }));
    it('should have a list of Pokemon', () => __awaiter(void 0, void 0, void 0, function* () {
        yield detox_1.expect(detox_1.element(detox_1.by.id('pokemon-list'))).toBeVisible();
    }));
    it('should take me to a pokemon details screen when tapped', () => __awaiter(void 0, void 0, void 0, function* () {
        yield detox_1.element(detox_1.by.id('list-cinderace')).tap();
        yield detox_1.expect(detox_1.element(detox_1.by.id('cinderace-details'))).toBeVisible();
    }));
    it('should take me back to the home screen on tapping back', () => __awaiter(void 0, void 0, void 0, function* () {
        yield detox_1.element(detox_1.by.id('header-back')).tap();
        yield detox_1.expect(detox_1.element(detox_1.by.id('pokemon-list'))).toBeVisible();
    }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL3NhbXVlbGJhcmtlci9jb2RlL3BlcnNvbmFsL3JlYWN0LW5hdGl2ZS1wbGF5Z3JvdW5kL3BsYXlncm91bmQvZTJlL3ZpZXdpbmcuc3BlYy50cyIsInNvdXJjZXMiOlsiL1VzZXJzL3NhbXVlbGJhcmtlci9jb2RlL3BlcnNvbmFsL3JlYWN0LW5hdGl2ZS1wbGF5Z3JvdW5kL3BsYXlncm91bmQvZTJlL3ZpZXdpbmcuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGlDQUE2RDtBQUM3RCwyREFBK0M7QUFFL0MsUUFBUSxDQUFDLGlCQUFpQixFQUFFLEdBQUcsRUFBRTtJQUMvQixTQUFTLENBQUMsR0FBUyxFQUFFO1FBQ25CLE1BQU0sOEJBQVMsRUFBRSxDQUFDO0lBQ3BCLENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMseUNBQXlDLEVBQUUsR0FBUyxFQUFFO1FBQ3ZELE1BQU0sY0FBTSxDQUFDLGVBQU8sQ0FBQyxVQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNyRCxDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLCtCQUErQixFQUFFLEdBQVMsRUFBRTtRQUM3QyxNQUFNLGNBQU0sQ0FBQyxlQUFPLENBQUMsVUFBRSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDN0QsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx3REFBd0QsRUFBRSxHQUFTLEVBQUU7UUFDdEUsTUFBTSxlQUFPLENBQUMsVUFBRSxDQUFDLEVBQUUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDN0MsTUFBTSxjQUFNLENBQUMsZUFBTyxDQUFDLFVBQUUsQ0FBQyxFQUFFLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDbEUsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyx3REFBd0QsRUFBRSxHQUFTLEVBQUU7UUFDdEUsTUFBTSxlQUFPLENBQUMsVUFBRSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQzFDLE1BQU0sY0FBTSxDQUFDLGVBQU8sQ0FBQyxVQUFFLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3RCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBieSwgZGV2aWNlLCBleHBlY3QsIGVsZW1lbnQsIHdhaXRGb3IgfSBmcm9tICdkZXRveCc7XG5pbXBvcnQgeyByZWxvYWRBcHAgfSBmcm9tICdkZXRveC1leHBvLWhlbHBlcnMnO1xuXG5kZXNjcmliZSgnVmlld2luZyBQb2tlbW9uJywgKCkgPT4ge1xuICBiZWZvcmVBbGwoYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IHJlbG9hZEFwcCgpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIGRpc3BsYXkgdGhlIGhvbWUgc2NyZWVuIG9uIHN0YXJ0JywgYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGV4cGVjdChlbGVtZW50KGJ5LmlkKCdob21lJykpKS50b0JlVmlzaWJsZSgpO1xuICB9KTtcblxuICBpdCgnc2hvdWxkIGhhdmUgYSBsaXN0IG9mIFBva2Vtb24nLCBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgZXhwZWN0KGVsZW1lbnQoYnkuaWQoJ3Bva2Vtb24tbGlzdCcpKSkudG9CZVZpc2libGUoKTtcbiAgfSk7XG5cbiAgaXQoJ3Nob3VsZCB0YWtlIG1lIHRvIGEgcG9rZW1vbiBkZXRhaWxzIHNjcmVlbiB3aGVuIHRhcHBlZCcsIGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBlbGVtZW50KGJ5LmlkKCdsaXN0LWNpbmRlcmFjZScpKS50YXAoKTtcbiAgICBhd2FpdCBleHBlY3QoZWxlbWVudChieS5pZCgnY2luZGVyYWNlLWRldGFpbHMnKSkpLnRvQmVWaXNpYmxlKCk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgdGFrZSBtZSBiYWNrIHRvIHRoZSBob21lIHNjcmVlbiBvbiB0YXBwaW5nIGJhY2snLCBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgZWxlbWVudChieS5pZCgnaGVhZGVyLWJhY2snKSkudGFwKCk7XG4gICAgYXdhaXQgZXhwZWN0KGVsZW1lbnQoYnkuaWQoJ3Bva2Vtb24tbGlzdCcpKSkudG9CZVZpc2libGUoKTtcbiAgfSk7XG59KTtcbiJdfQ==