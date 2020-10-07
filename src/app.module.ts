import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MessageEventsModule } from './message-events/message-events.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MessageEventsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
