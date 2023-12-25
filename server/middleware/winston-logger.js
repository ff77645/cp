import path from 'path'
import { createLogger, format, transports } from 'winston'
import 'winston-daily-rotate-file'

const logsDir = path.resolve(path.dirname(process.argv[1]), '../store/logs')

export const logger = createLogger({
	level: 'http',
	format: format.combine(
		format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
		format.json(),
	),
	transports: [
		new transports.DailyRotateFile({
			filename: path.join(logsDir, 'error-%DATE%.log'),
			atePattern: 'YYYY-MM-DD-HH',
			zippedArchive: true,
			maxSize: '10m',
			maxFiles: '7d',
			level: 'error',
		}),
		// new transports.DailyRotateFile({
		//   filename: path.join(logsDir, 'http-%DATE%.log'),
		//   atePattern: 'YYYY-MM-DD-HH',
		//   zippedArchive: true,
		//   maxSize: '10m',
		//   maxFiles: '7d',
		//   level: 'http',
		// }),
		new transports.DailyRotateFile({
			filename: path.join(logsDir, 'logs-%DATE%.log'),
			atePattern: 'YYYY-MM-DD-HH',
			zippedArchive: true,
			maxSize: '10m',
			maxFiles: '7d',
		}),
	],
})

export function WinstonLogger(){
	return async (ctx, next) => {
		ctx.log = logger
		next()
	}
}
