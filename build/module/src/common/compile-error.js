import os from 'os';
import { cyan, gray, red, yellow } from 'colorette';
import { repeatString } from '../utils';
export function formatCompileError(error) {
    if (!error.location)
        return error.message;
    const pathMessage = cyan(error.location.file) +
        ':' +
        yellow(error.location.line) +
        ':' +
        yellow(error.location.column);
    const categoryMessage = red('error:');
    const code = gray(error.location.line) +
        ' ' +
        error.location.lineText +
        os.EOL +
        repeatString(' ', error.location.column + `${error.location.line}`.length + 1 + 1) +
        red(repeatString('~', error.location.length)) +
        repeatString(' ', error.location.lineText.length -
            error.location.column -
            error.location.length);
    return `${pathMessage} - ${categoryMessage} ${error.message} ${os.EOL} ${code}`;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGlsZS1lcnJvci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9jb21tb24vY29tcGlsZS1lcnJvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsTUFBTSxJQUFJLENBQUM7QUFFcEIsT0FBTyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxNQUFNLFdBQVcsQ0FBQztBQUVwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sVUFBVSxDQUFDO0FBZ0J4QyxNQUFNLFVBQVUsa0JBQWtCLENBQUMsS0FBbUI7SUFDcEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRO1FBQUUsT0FBTyxLQUFLLENBQUMsT0FBTyxDQUFDO0lBRTFDLE1BQU0sV0FBVyxHQUNmLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUN6QixHQUFHO1FBQ0gsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQzNCLEdBQUc7UUFDSCxNQUFNLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNoQyxNQUFNLGVBQWUsR0FBRyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFFdEMsTUFBTSxJQUFJLEdBQ1IsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDO1FBQ3pCLEdBQUc7UUFDSCxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVE7UUFDdkIsRUFBRSxDQUFDLEdBQUc7UUFDTixZQUFZLENBQ1YsR0FBRyxFQUNILEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLEdBQUcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FDaEU7UUFDRCxHQUFHLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdDLFlBQVksQ0FDVixHQUFHLEVBQ0gsS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTTtZQUM1QixLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU07WUFDckIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQ3hCLENBQUM7SUFFSixPQUFPLEdBQUcsV0FBVyxNQUFNLGVBQWUsSUFBSSxLQUFLLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7QUFDbEYsQ0FBQyJ9