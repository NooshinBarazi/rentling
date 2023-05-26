import { NextResponse } from 'next/dist/server/web/spec-extension/response';

export default function middleware(req: any) {
  let loggedIn = req.cookies.get('availableUser');
  let url = req.url;

  if (!loggedIn && url.includes('profile')) {
    return NextResponse.redirect('http://localhost:4200/auth/sign-in');
  }

  if (loggedIn && url === '/') {
    return NextResponse.redirect('http://localhost:4200/profile');
  }
}
