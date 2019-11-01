#import "os/log.h"
#import "NativeLogger.h"
@implementation NativeLogger

-(void)logInfo:(NSString*)message {
    NSLog(@"NativeScript Native NSLog");
    os_log_t log = os_log_create("org.nativescript", "test");
    os_log(log, "NativeScript Native default log");
    os_log_debug(log, "NativeScript Native debug log");
    os_log_error(log, "NativeScript Native error log");
    os_log_fault(log, "NativeScript Native fault log");
}

-(void)throwAnException {
    [NSException raise:@"NativeScript Invalid foo value" format:@"NativeScript foo of %d is   invalid", 10];
}

@end 