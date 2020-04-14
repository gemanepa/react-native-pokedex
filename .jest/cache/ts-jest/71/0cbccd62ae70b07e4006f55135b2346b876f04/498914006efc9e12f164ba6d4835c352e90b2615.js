var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { by, expect, element } from 'detox';
import { reloadApp } from 'detox-expo-helpers';
describe('Searching Pokemon', () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield reloadApp();
    }));
    it('should display the home screen on start', () => __awaiter(void 0, void 0, void 0, function* () {
        yield expect(element(by.id('home'))).toBeVisible();
    }));
    it('should have a search bar', () => __awaiter(void 0, void 0, void 0, function* () {
        yield expect(element(by.id('search-bar'))).toBeVisible();
    }));
    it('should update the list based on my search', () => __awaiter(void 0, void 0, void 0, function* () {
        yield element(by.id('search-bar')).typeText('chu');
        yield expect(element(by.id('list-pikachu'))).toBeVisible();
        yield expect(element(by.id('list-raichu'))).toBeVisible();
        yield expect(element(by.id('list-pichu'))).toBeVisible();
        yield expect(element(by.id('list-cinderace'))).toBeNotVisible();
    }));
    it('should update the list if I delete all characters', () => __awaiter(void 0, void 0, void 0, function* () {
        yield element(by.id('search-bar')).clearText();
        yield expect(element(by.id('list-grookey'))).toBeVisible();
    }));
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL3NhbXVlbGJhcmtlci9jb2RlL3BlcnNvbmFsL3JlYWN0LW5hdGl2ZS1wbGF5Z3JvdW5kL3BsYXlncm91bmQvZTJlL3NlYXJjaGluZy5zcGVjLnRzIiwic291cmNlcyI6WyIvVXNlcnMvc2FtdWVsYmFya2VyL2NvZGUvcGVyc29uYWwvcmVhY3QtbmF0aXZlLXBsYXlncm91bmQvcGxheWdyb3VuZC9lMmUvc2VhcmNoaW5nLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsT0FBTyxFQUFFLEVBQUUsRUFBVSxNQUFNLEVBQUUsT0FBTyxFQUFXLE1BQU0sT0FBTyxDQUFDO0FBQzdELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUUvQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxFQUFFO0lBQ2pDLFNBQVMsQ0FBQyxHQUFTLEVBQUU7UUFDbkIsTUFBTSxTQUFTLEVBQUUsQ0FBQztJQUNwQixDQUFDLENBQUEsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLHlDQUF5QyxFQUFFLEdBQVMsRUFBRTtRQUN2RCxNQUFNLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDckQsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQywwQkFBMEIsRUFBRSxHQUFTLEVBQUU7UUFDeEMsTUFBTSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQzNELENBQUMsQ0FBQSxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsMkNBQTJDLEVBQUUsR0FBUyxFQUFFO1FBQ3pELE1BQU0sT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkQsTUFBTSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzNELE1BQU0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUMxRCxNQUFNLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDekQsTUFBTSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDbEUsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxtREFBbUQsRUFBRSxHQUFTLEVBQUU7UUFDakUsTUFBTSxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQy9DLE1BQU0sTUFBTSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3RCxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBieSwgZGV2aWNlLCBleHBlY3QsIGVsZW1lbnQsIHdhaXRGb3IgfSBmcm9tICdkZXRveCc7XG5pbXBvcnQgeyByZWxvYWRBcHAgfSBmcm9tICdkZXRveC1leHBvLWhlbHBlcnMnO1xuXG5kZXNjcmliZSgnU2VhcmNoaW5nIFBva2Vtb24nLCAoKSA9PiB7XG4gIGJlZm9yZUFsbChhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgcmVsb2FkQXBwKCk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgZGlzcGxheSB0aGUgaG9tZSBzY3JlZW4gb24gc3RhcnQnLCBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgZXhwZWN0KGVsZW1lbnQoYnkuaWQoJ2hvbWUnKSkpLnRvQmVWaXNpYmxlKCk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgaGF2ZSBhIHNlYXJjaCBiYXInLCBhc3luYyAoKSA9PiB7XG4gICAgYXdhaXQgZXhwZWN0KGVsZW1lbnQoYnkuaWQoJ3NlYXJjaC1iYXInKSkpLnRvQmVWaXNpYmxlKCk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgdXBkYXRlIHRoZSBsaXN0IGJhc2VkIG9uIG15IHNlYXJjaCcsIGFzeW5jICgpID0+IHtcbiAgICBhd2FpdCBlbGVtZW50KGJ5LmlkKCdzZWFyY2gtYmFyJykpLnR5cGVUZXh0KCdjaHUnKTtcbiAgICBhd2FpdCBleHBlY3QoZWxlbWVudChieS5pZCgnbGlzdC1waWthY2h1JykpKS50b0JlVmlzaWJsZSgpO1xuICAgIGF3YWl0IGV4cGVjdChlbGVtZW50KGJ5LmlkKCdsaXN0LXJhaWNodScpKSkudG9CZVZpc2libGUoKTtcbiAgICBhd2FpdCBleHBlY3QoZWxlbWVudChieS5pZCgnbGlzdC1waWNodScpKSkudG9CZVZpc2libGUoKTtcbiAgICBhd2FpdCBleHBlY3QoZWxlbWVudChieS5pZCgnbGlzdC1jaW5kZXJhY2UnKSkpLnRvQmVOb3RWaXNpYmxlKCk7XG4gIH0pO1xuXG4gIGl0KCdzaG91bGQgdXBkYXRlIHRoZSBsaXN0IGlmIEkgZGVsZXRlIGFsbCBjaGFyYWN0ZXJzJywgYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGVsZW1lbnQoYnkuaWQoJ3NlYXJjaC1iYXInKSkuY2xlYXJUZXh0KCk7XG4gICAgYXdhaXQgZXhwZWN0KGVsZW1lbnQoYnkuaWQoJ2xpc3QtZ3Jvb2tleScpKSkudG9CZVZpc2libGUoKTtcbiAgfSk7XG59KTtcbiJdfQ==