package clases;

public class Algoritmos {
    public static boolean esPar(int numero) {
        return numero % 2 == 0;
    }

    public static boolean esPrimo(int numero) {
        if (numero <= 1) {
            return false; 
        }
        for (int i = 2; i < numero; i++) {
            if (numero % i == 0) {
                return false;
            }
        }
        return true; 
    }

    public static String stringEnReversa(String texto) {
        String textoReverso = "";
        for (int i = texto.length() - 1; i >= 0; i--) {
            textoReverso += texto.charAt(i);
        }
        return textoReverso;
    }

    public static boolean esPalindromo(String texto) {
        String textoReverso = stringEnReversa(texto);
        return texto.equals(textoReverso);
    }

    public static void secuenciaFizzBuzz(int numero) {
        for (int i = 1; i <= numero; i++) {
            if (i % 3 == 0 && i % 5 == 0) {
                System.out.print("FizzBuzz ");
            } else if (i % 3 == 0) {
                System.out.print("Fizz ");
            } else if (i % 5 == 0) {
                System.out.print("Buzz ");
            } else {
                System.out.print(i + " ");
            }
        }
        System.out.println();
    }
}