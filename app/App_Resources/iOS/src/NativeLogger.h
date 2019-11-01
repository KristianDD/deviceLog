
#import <os/log.h>
#import <Foundation/Foundation.h>
@interface NativeLogger : NSObject

-(void)logInfo:(NSString*)message;
-(void)throwAnException;
@end