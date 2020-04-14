"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const fontSize = 15;
exports.styles = react_native_1.StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column'
    },
    imageContainer: {
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 5,
        paddingTop: 5
    },
    mainImage: {
        backgroundColor: 'white'
    },
    typeText: {
        width: '100%',
        textTransform: 'uppercase',
        fontSize,
        fontWeight: 'bold',
        lineHeight: (fontSize * 0.5) + (fontSize * 2),
        textAlign: 'center'
    },
    infoContainer: {
        flex: 1,
        flexDirection: 'column',
        paddingTop: 7.5,
        paddingBottom: 7.5,
        marginLeft: 20,
        marginRight: 20
    },
    infoTitle: {
        fontSize: 22,
        fontWeight: 'bold'
    },
    infoText: {
        textTransform: 'capitalize',
        fontWeight: 'bold',
        paddingTop: 5,
        paddingBottom: 5
    },
    infoDescription: {
        paddingTop: 5,
        paddingBottom: 5
    },
    chartsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignContent: 'flex-start',
        flexWrap: 'wrap'
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiL1VzZXJzL3NhbXVlbGJhcmtlci9jb2RlL3BlcnNvbmFsL3JlYWN0LW5hdGl2ZS1wbGF5Z3JvdW5kL3BsYXlncm91bmQvc3JjL3NjcmVlbnMvZGV0YWlscy9zdHlsZXMudHMiLCJzb3VyY2VzIjpbIi9Vc2Vycy9zYW11ZWxiYXJrZXIvY29kZS9wZXJzb25hbC9yZWFjdC1uYXRpdmUtcGxheWdyb3VuZC9wbGF5Z3JvdW5kL3NyYy9zY3JlZW5zL2RldGFpbHMvc3R5bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsK0NBQTBDO0FBRTFDLE1BQU0sUUFBUSxHQUFHLEVBQUUsQ0FBQztBQUVQLFFBQUEsTUFBTSxHQUFHLHlCQUFVLENBQUMsTUFBTSxDQUFDO0lBQ3RDLFNBQVMsRUFBRTtRQUNULGVBQWUsRUFBRSxPQUFPO1FBQ3hCLElBQUksRUFBRSxDQUFDO1FBQ1AsYUFBYSxFQUFFLFFBQVE7S0FDeEI7SUFDRCxjQUFjLEVBQUU7UUFDZCxlQUFlLEVBQUUsT0FBTztRQUN4QixjQUFjLEVBQUUsUUFBUTtRQUN4QixVQUFVLEVBQUUsUUFBUTtRQUNwQixhQUFhLEVBQUUsQ0FBQztRQUNoQixVQUFVLEVBQUUsQ0FBQztLQUNkO0lBQ0QsU0FBUyxFQUFFO1FBQ1QsZUFBZSxFQUFFLE9BQU87S0FDekI7SUFDRCxRQUFRLEVBQUU7UUFDUixLQUFLLEVBQUUsTUFBTTtRQUNiLGFBQWEsRUFBRSxXQUFXO1FBQzFCLFFBQVE7UUFDUixVQUFVLEVBQUUsTUFBTTtRQUNsQixVQUFVLEVBQUUsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQzdDLFNBQVMsRUFBRSxRQUFRO0tBQ3BCO0lBQ0QsYUFBYSxFQUFFO1FBQ2IsSUFBSSxFQUFFLENBQUM7UUFDUCxhQUFhLEVBQUUsUUFBUTtRQUN2QixVQUFVLEVBQUUsR0FBRztRQUNmLGFBQWEsRUFBRSxHQUFHO1FBQ2xCLFVBQVUsRUFBRSxFQUFFO1FBQ2QsV0FBVyxFQUFFLEVBQUU7S0FDaEI7SUFDRCxTQUFTLEVBQUU7UUFDVCxRQUFRLEVBQUUsRUFBRTtRQUNaLFVBQVUsRUFBRSxNQUFNO0tBQ25CO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsYUFBYSxFQUFFLFlBQVk7UUFDM0IsVUFBVSxFQUFFLE1BQU07UUFDbEIsVUFBVSxFQUFFLENBQUM7UUFDYixhQUFhLEVBQUUsQ0FBQztLQUNqQjtJQUNELGVBQWUsRUFBRTtRQUNmLFVBQVUsRUFBRSxDQUFDO1FBQ2IsYUFBYSxFQUFFLENBQUM7S0FDakI7SUFDRCxlQUFlLEVBQUU7UUFDZixJQUFJLEVBQUUsQ0FBQztRQUNQLGFBQWEsRUFBRSxLQUFLO1FBQ3BCLGNBQWMsRUFBRSxjQUFjO1FBQzlCLFlBQVksRUFBRSxZQUFZO1FBQzFCLFFBQVEsRUFBRSxNQUFNO0tBQ2pCO0NBQ0YsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3R5bGVTaGVldCB9IGZyb20gJ3JlYWN0LW5hdGl2ZSc7XG5cbmNvbnN0IGZvbnRTaXplID0gMTU7XG5cbmV4cG9ydCBjb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIGNvbnRhaW5lcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyxcbiAgICBmbGV4OiAxLFxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXG4gIH0sXG4gIGltYWdlQ29udGFpbmVyOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBwYWRkaW5nQm90dG9tOiA1LFxuICAgIHBhZGRpbmdUb3A6IDVcbiAgfSxcbiAgbWFpbkltYWdlOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnXG4gIH0sXG4gIHR5cGVUZXh0OiB7XG4gICAgd2lkdGg6ICcxMDAlJyxcbiAgICB0ZXh0VHJhbnNmb3JtOiAndXBwZXJjYXNlJyxcbiAgICBmb250U2l6ZSxcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgbGluZUhlaWdodDogKGZvbnRTaXplICogMC41KSArIChmb250U2l6ZSAqIDIpLFxuICAgIHRleHRBbGlnbjogJ2NlbnRlcidcbiAgfSxcbiAgaW5mb0NvbnRhaW5lcjoge1xuICAgIGZsZXg6IDEsXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXG4gICAgcGFkZGluZ1RvcDogNy41LFxuICAgIHBhZGRpbmdCb3R0b206IDcuNSxcbiAgICBtYXJnaW5MZWZ0OiAyMCxcbiAgICBtYXJnaW5SaWdodDogMjBcbiAgfSxcbiAgaW5mb1RpdGxlOiB7XG4gICAgZm9udFNpemU6IDIyLFxuICAgIGZvbnRXZWlnaHQ6ICdib2xkJ1xuICB9LFxuICBpbmZvVGV4dDoge1xuICAgIHRleHRUcmFuc2Zvcm06ICdjYXBpdGFsaXplJyxcbiAgICBmb250V2VpZ2h0OiAnYm9sZCcsXG4gICAgcGFkZGluZ1RvcDogNSxcbiAgICBwYWRkaW5nQm90dG9tOiA1XG4gIH0sXG4gIGluZm9EZXNjcmlwdGlvbjoge1xuICAgIHBhZGRpbmdUb3A6IDUsXG4gICAgcGFkZGluZ0JvdHRvbTogNVxuICB9LFxuICBjaGFydHNDb250YWluZXI6IHtcbiAgICBmbGV4OiAxLFxuICAgIGZsZXhEaXJlY3Rpb246ICdyb3cnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtZXZlbmx5JyxcbiAgICBhbGlnbkNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyxcbiAgICBmbGV4V3JhcDogJ3dyYXAnXG4gIH1cbn0pO1xuIl19