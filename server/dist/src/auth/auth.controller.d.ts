import { AuthService } from './auth.service';
import { AuthDto, SignupDto } from './dto';
import { Tokens } from './types';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signupLocal(dto: SignupDto): Promise<Tokens>;
    signinLocal(dto: AuthDto): Promise<Tokens>;
    logout(userId: number): Promise<boolean>;
    refreshTokens(userId: number, refreshToken: string): Promise<Tokens>;
}
