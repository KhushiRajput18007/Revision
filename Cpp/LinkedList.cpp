#include<iostream>
using namespace std;

class Node {
public:
 int data;
 Node* next;
 Node(int value) {
  data = value;
  next = NULL;
 }
};
int main() {
    Node* n1= new Node(10);
    Node* n2= new Node(20);
    Node* n3= new Node(30);
    Node* n4= new Node(40);  

   n1->next=n2;
   n2->next=n3; 
   
   Node* head=n1;
 Node* temp = head;
 while(temp->next!=NULL){
     temp=temp->next;
 }
 
 temp->next=n4;
   while(head!=NULL){
       cout<<head->data<<"-> ";
       head=head->next;
   }
cout<<"NULL"; 
    return 0;
}