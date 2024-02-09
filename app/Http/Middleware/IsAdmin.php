<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class IsAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

         // Check if the user is an admin (you need to customize this logic based on your user model)
         if (auth()->check() && auth()->user()->is_admin) {
            return $next($request);
        }

        // Redirect or handle unauthorized access
        return redirect('/')->with('error', 'Unauthorized access.');
      //  return $next($request);
    }
}
